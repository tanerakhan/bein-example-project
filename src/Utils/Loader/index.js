import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoaderAnimate } from './style';

export default function LoadIcon() {
        return(
            <LoaderAnimate>
                <ClipLoader sizeUnit={"px"} size={15} color={'#123abc'}/>
            </LoaderAnimate>
        )
}