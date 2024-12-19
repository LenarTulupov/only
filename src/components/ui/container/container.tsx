import { ReactNode } from "react"
import styles from './container.module.scss';

interface IContainer {
  children: ReactNode;
}

export default function Container({ children }: IContainer) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};
