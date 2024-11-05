'use client'
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./app/page.module.css";

export default function Bug() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    console.log('[effect] searchParams:', searchParams.toString())
  }, [searchParams])

  useEffect(() => {
    if (Number(searchParams.get('foo')) >= 5) {
      window.history.replaceState(null, '', '?foo=bar')
      
      setTimeout(() => {
        router.refresh()
      }, 1000)
    }
  }, [searchParams])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={() => {
          window.history.replaceState(null, '', '?foo=' + Math.floor(Math.random() * 10))
        }}>
          Update `foo` as random
        </button>
      </main>
    </div>
  );
}
