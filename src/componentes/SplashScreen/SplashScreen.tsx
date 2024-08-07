import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SplashScreen.module.css';
const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 80);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.splashContainer}>
      <img src="/senai.png" alt="Splash Image" className={styles.pulsatingImage} />
    </div>
  );
};

export default SplashScreen;
