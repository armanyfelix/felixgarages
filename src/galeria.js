import Gallery from "react-photo-gallery";

const photos = [
    {
      src: '/img/gallery/bmw_blanco(1).jfif',
      width: 4,
      height: 3
    },
    {
      src: '/img/gallery/bmw_blanco(2).jfif',
      width: 1,
      height: 1
    },
    {
        src: '/img/gallery/bmw_blanco(3).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco(5).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco(6).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco(7).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco(9).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_blanco(10).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/bmw_negro.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/corolla(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/corolla(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/culo.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/f-150.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/ford_blanco.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/ford_negro.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/honda_negro(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/hondita.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/injerto_despues(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/injerto_despues(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/injertos_antes(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/injertos_antes(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/injertos_antes(3).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/paco(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/honda.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/honda(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/honda(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/honda_negro(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/tacoma(2).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/tacoma(1).jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/tacoma.jfif',
        width: 1,
        height: 1
      },
      {
        src: '/img/gallery/volvo_negro.jfif',
        width: 1,
        height: 1
      },

  ];


function Galeria() {
    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}

export default Galeria
