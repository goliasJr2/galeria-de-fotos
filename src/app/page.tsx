"use client";

import { PhotoItem } from "@/components/photoItem";
import { photoList } from "./data/photoList";
import { useState } from "react";
import { Modal } from "@/components/modal";

export default function Home() {
  //Criando states para mostrar modal e para fechar modal
  //
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  //Método para abrir o modal
  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };

  //Método para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="min-h-screen items-center m-2">
      <h1 className="text-center text-3xl font-bold my-10">
        Fotos Intergalacticas
      </h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => {
              openModal(item.id);
            }}
          />
        ))}
      </section>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </main>
  );
}
