import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const VideoItem = ({mediaList, item}) => {
	const history = useHistory();
	const [hovering, setHovering] = useState(false);
	return <button
		className='col-12 col-sm-6 col-md-4 col-lg-3 px-1 text-start video-wrapper'
		style={{height: '291px', width:'291px', border: 'none', backgroundColor: 'transparent'}} onClick={e => {
			history.push(`/watch/${item}/${mediaList[item].mainManifest}`);
		}}
		onMouseEnter={e => setHovering(true)}
		onMouseLeave={e => setHovering(false)}
	>
		<div className='col-12 rounded' style={{top: 0, position: 'relative', height: '96%'}}>
			<img
				alt='thumbnail'
				src={`/thumbnails/${mediaList[item].thumbnail}.png`}
				style={{position: 'absolute', bottom: 0, borderRadius: '16px'}}
				className='col-12 h-100 w-100' />
			<img
				alt='Animated thumbnail'
				src={`/thumbnails/${mediaList[item].thumbnail}.gif`}
				style={{position: 'absolute', display: hovering ? 'block' : 'none', bottom: 0, borderRadius: '16px'}}
				className='col-12  h-100 w-100' />
		</div>
		<div className='col description-wrapper'>
		<span className='description-title'>{mediaList[item].title}<br/></span>
		{/* <span className='description'>{mediaList[item].description.slice(0, 25)}{mediaList[item].description.length > 30 ? '...' : ''}<br></br></span> */}
		<span className='description'>{mediaList[item].author.slice(0, 7)}{mediaList[item].author.length > 10 ? '...' : ''}</span>
		</div>
	</button>
}

export default VideoItem;