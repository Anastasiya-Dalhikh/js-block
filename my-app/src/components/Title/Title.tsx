import * as classes from './Title.module.css';

type TitleProps = {
    title: string;
};

export const Title = ({ title }: TitleProps) =>{
    return (
    <div className={classes.titleContainer}>
        <h1 className={classes.title}>{title}</h1>
    </div>
    );
};