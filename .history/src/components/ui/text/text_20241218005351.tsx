import styles from './text.module.scss';

interface IText {
  text: string;
}

export default function Text({ text }: IText) {
  return (
    <div className={styles.text}>
        Text
    </div>
  )
};
