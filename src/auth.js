// Lazy Firebase Auth + Firestore wrapper (SDK loaded from CDN only when needed).
import { FIREBASE_CONFIG } from './firebase-config.js';

const V = '10.12.2';
let mod = null;

async function load() {
  if (mod) return mod;
  const imp = u => import(/* @vite-ignore */ u);
  const [app, auth, fs] = await Promise.all([
    imp(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
    imp(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
    imp(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
  ]);
  const fbApp = app.initializeApp(FIREBASE_CONFIG);
  mod = {
    authApi: auth,
    fsApi: fs,
    auth: auth.getAuth(fbApp),
    db: fs.getFirestore(fbApp),
  };
  return mod;
}

export async function onUser(cb) {
  const m = await load();
  return m.authApi.onAuthStateChanged(m.auth, cb);
}
export async function signIn(email, pw) {
  const m = await load();
  return m.authApi.signInWithEmailAndPassword(m.auth, email, pw);
}
export async function register(email, pw) {
  const m = await load();
  return m.authApi.createUserWithEmailAndPassword(m.auth, email, pw);
}
export async function signOutUser() {
  const m = await load();
  return m.authApi.signOut(m.auth);
}
export async function pullProgress(uid) {
  const m = await load();
  const snap = await m.fsApi.getDoc(m.fsApi.doc(m.db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}
export async function pushProgress(uid, data) {
  const m = await load();
  await m.fsApi.setDoc(m.fsApi.doc(m.db, 'users', uid), data);
}
