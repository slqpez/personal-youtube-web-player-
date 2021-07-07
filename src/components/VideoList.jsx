import React from 'react'
import Video from './Video'

export default function VideoList({list}) {
    return (
        <div>
            {list.map(item=><Video key={item.id.videoId} item={item}/>)}
        </div>
    )
}
