import * as React from "react";

import s from './cityLocation.module.scss';

interface CityLocationProps {
    image: string;
    name: string;
}

const CityLocation = (props: CityLocationProps) => {
    return (
        <div className={s.cityLocation}>
            <img src={props.image} alt={props.image} />
            <span>{props.name}</span>
        </div>
    );
}

export default CityLocation;