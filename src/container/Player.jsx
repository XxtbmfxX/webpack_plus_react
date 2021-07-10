import React, {useEffect}  from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'


import NotFound from "../container/NotFound";
import { getVideoSource } from "../actions";

import '../styles/Player.scss'

const Player = props => {
    const { id } = props.match.params //desde donde generamos la ruta
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ?(
        <div className="Player" >
            <video controls autoPlay >
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back" >
                <Link  to="/" >
                    Regresar
                </Link>
            </div>
        </div>
    ): <NotFound/>
}

const mapStateToProps = state =>{
    return {
        playing: state.playing,
    }
 }

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)