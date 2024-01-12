import React, {useEffect, useState, useRef} from 'react';
import './virtualize.styles.css';


const Virtualize = ({data, Component, threshold = 2, gap = 0, keyEtractorFunction}) => {
    const [listToRender, setListToRender] = useState({start: 0, end: 10});
    const parentContainerRef = useRef(null);

    const elHeight = 250

    useEffect(function () {
        const timeout = setTimeout(function () {
            parentContainerRef.current?.setAttribute('style', `height:${elHeight * data?.length}px`);
            calcListToRender();
            clearTimeout(timeout);
        })
    }, []);


    // вычисление списка для рендеринга
    const calcListToRender = function () {
        const containerHeight = parentContainerRef.current.parentElement.offsetHeight;
        const scrollTop = parentContainerRef.current.parentElement.scrollTop;
        const startIndex = Math.max(0, Math.floor(scrollTop / elHeight) - threshold); //
        const endIndex = Math.min(data?.length - 1, Math.ceil((scrollTop + containerHeight) / elHeight + threshold));
        if (!endIndex || !startIndex) {
            setListToRender({
                start: 0,
                end: 10
            })
            return
        }
        setListToRender({
            start: startIndex,
            end: endIndex
        })

    }

    const listElements = data?.slice(listToRender.start, listToRender.end)
        .map((item, index) =>
            <div
                className='virtualizedItem'
                style={{'--gap': `${gap}px`, '--top': `${(listToRender.start + index) * elHeight}px`}}
                key={keyEtractorFunction?.(item)}
            >
                <Component {...item} index={index}/>
            </div>)


    return (
        <div ref={parentContainerRef} className='virtualContainer' onWheel={calcListToRender}>
            {listElements}
        </div>)
}

export default Virtualize;