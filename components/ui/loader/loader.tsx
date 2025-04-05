import s from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}></div>
    </div>
  );
};
