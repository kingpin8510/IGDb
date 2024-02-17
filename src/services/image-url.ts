const getCroppedImage = (url: string) => {
    if(!url) return ''; //used this so as to avoid the application breaking down without an image

    const target = 'media/';
    const index = url.indexOf(target) +target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImage