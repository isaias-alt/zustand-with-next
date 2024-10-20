'use client';
import usePersistStore from '@/helpers/usePersistStore';
import { useBearStore } from './_store/index';

export default function Page() {
  const store = usePersistStore(useBearStore, (state) => state);

  return (
    <main>
      <h1>Bears</h1>
      <p>How many Bears are in our Store? {store?.bears}</p>

      <button onClick={store?.increase}>Increase</button>
      <button onClick={store?.decrease}>Decrease</button>
    </main>
  );
}