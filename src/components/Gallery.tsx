import React from 'react';
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions"
import PhotoAlbum from 'react-photo-album';
import golf from './media/golf.jpeg';
import church from './media/church.jpeg';
import intro from './media/intro.jpeg';
import littleboy from './media/littleboy.jpeg'
import baby from './media/baby.jpeg'
import mariage1 from './media/mariage1.jpeg'

export default function Gallery(){
    const[open,setOpen ] = React.useState(false)
    const photos = [
        { src: golf, width: 600, height: 600, onClick:() => {setOpen:true} },
        { src: church, width: 600, height: 900, onClick:()=>{setOpen:true} },
        { src:mariage1, width:700,height:1000,onClick:()=>{setOpen:true}},
        { src:baby,width:700,height:1000,onClick:()=>{setOpen:true} },
        {src:intro,width:600,height:600,onClick:()=>{setOpen:true}}
    ];
    return <>
        <PhotoAlbum layout='rows' photos={photos}/>
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
                { src:church, title:"Terry and Chris Jensen"},
                { src:golf, title:'Playing Golf with Mr. Barber'},
                {src:intro,title:'Waiting to get Married!'},
                {src:littleboy,title:'Young Jensen in Brooklyn'},
                {src:mariage1,title:'Terry and Christian Jensen getting Married'}
            ]}
            plugins={[Captions]}
        />


    </>
};