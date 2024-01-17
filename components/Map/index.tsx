'use client'

import { GoogleMap, Libraries, Marker, useLoadScript  } from "@react-google-maps/api"
import { type FC } from "react"

const libraries: Libraries = ["places"]


interface ICoordiante {
  lat: number
  lng: number
}

const center: ICoordiante = {
  lat: 10.792658827199825, // default latitude
  lng: 106.73994407882846, // default longitude
}

interface IMap {
  style?: any;
}

const Map: FC<IMap> = ({style}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.GOOGLE_MAP_API_KEY}`,
    libraries,
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps</div>
  }

  return (
    <div>
      <GoogleMap mapContainerStyle={style} zoom={18} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default Map
