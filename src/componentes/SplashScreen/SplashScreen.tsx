// components/SplashScreen.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SplashScreen.module.css';
const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/informacoes-empresa');
    }, 600);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.splashContainer}>
      <img src="/senai.png" alt="Splash Image" className={styles.pulsatingImage} />
    </div>
  );
};

export default SplashScreen;