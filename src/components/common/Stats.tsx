import React from "react";

import s from './stats.module.scss';

interface StatsProps {
    image: string;
    value: number;
}

const Stats = (props: StatsProps) => {
    return (
        <div className={s.stats}>
            <div className={s.stats__image}>
                <img src={props.image} alt="stats" />
            </div>
            <span>{props.value}</span>
        </div>
    );
}

export default Stats;