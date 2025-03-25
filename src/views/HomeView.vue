<template>
  <div class="flex flex-col md:flex-row h-screen">
    <section class="flex-[20%] flex items-center justify-center overflow-hidden">
      <img v-if="selectedImage" :src="selectedImage" alt="Images" width="200" height="200" />
    </section>
    <section class="flex-[50%] flex flex-col items-center justify-center relative overflow-auto">
      <div class="text-center flex flex-wrap justify-center">
        <div
          v-for="item in words"
          :key="item.word"
          @click="handleWordClick(item.word, item.image)"
          class="bg-neutral-300 text-black p-2 m-2 rounded cursor-pointer"
        >
          {{ item.word }}
        </div>
      </div>
    </section>
    <section
      class="flex-[30%] bg-neutral-800 flex items-start justify-center relative border-current border-[2px] rounded-lg overflow-auto"
    >
      <div class="text-black p-2 flex flex-wrap pb-20">
        <div v-for="(word, index) in phrase" :key="index" class="bg-gray-200 p-1 m-1 rounded">
          {{ word }}
        </div>
      </div>
      <div class="fixed bottom-0 mb-2">
        <button
          @click="handleErase"
          class="bg-red-500 text-white text-xl font-semibold p-3 m-2 rounded-xl cursor-pointer hover:brightness-125 transition-all duration-200"
        >
          Apagar
        </button>
        <button
          @click="handleSpeak"
          class="bg-blue-500 text-xl font-semibold text-white p-3 m-2 rounded-xl cursor-pointer hover:brightness-125 transition-all duration-200"
        >
          Falar
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import waterImage from "@/assets/images/water.jpg";
import coffeeImage from "@/assets/images/coffee.jpg";
import lunchImage from "@/assets/images/lunch.jpg";
import jantaImage from "@/assets/images/janta.jpg";
import lancheImage from "@/assets/images/lanche.jpg";
import banheiroImage from "@/assets/images/banheiro.jpg";
import salaImage from "@/assets/images/sala.jpg";
import catImage from "@/assets/images/cat.jpg";
import dogImage from "@/assets/images/dog.jpg";
import birdImage from "@/assets/images/bird.jpg";
import dormirImage from "@/assets/images/dormir.jpg";
import passearImage from "@/assets/images/passear.jpg";
import dorImage from "@/assets/images/dor.jpg";
import barrigaImage from "@/assets/images/barriga.jpg";
import pernaImage from "@/assets/images/perna.jpg";
import simImage from "@/assets/images/sim.jpg";
import naoImage from "@/assets/images/nao.jpg";
import palpitacaoImage from "@/assets/images/palpitacao.jpg";
import cabecaImage from "@/assets/images/cabeca.jpg";

const selectedImage = ref<string | null>(null);
const phrase = ref<string[]>([]);

const words = [
  { word: "Eu", image: "" },
  { word: "Quero", image: "" },
  { word: "Água", image: waterImage },
  { word: "Tomar", image: "" },
  { word: "Café", image: coffeeImage },
  { word: "Almoço", image: lunchImage },
  { word: "Janta", image: jantaImage },
  { word: "Lanche", image: lancheImage },
  { word: "Comer", image: lancheImage },
  { word: "Ir", image: "" },
  { word: "Ao", image: "" },
  { word: "Banheiro", image: banheiroImage },
  { word: "Sala", image: salaImage },
  { word: "Cozinha", image: "" },
  { word: "Dormir", image: dormirImage },
  { word: "Passear", image: passearImage },
  { word: "Andar", image: "" },
  { word: "Dor", image: dorImage },
  { word: "Cabeça", image: cabecaImage },
  { word: "Pescoço", image: "" },
  { word: "Barriga", image: barrigaImage },
  { word: "Perna", image: pernaImage },
  { word: "Tontura", image: "" },
  { word: "Palpitação", image: palpitacaoImage },
  { word: "Sim", image: simImage },
  { word: "Não", image: naoImage },
  { word: "Gato", image: catImage },
  { word: "Cachorro", image: dogImage },
  { word: "Pássaro", image: birdImage },
  { word: "Karina", image: "" },
  { word: "Kyvia", image: "" },
  { word: "Carlinhos", image: "" },
  { word: "Andrea", image: "" },
  { word: "Pamella", image: "" },
  { word: "Gabriel", image: "" },
  { word: "Vinicius", image: "" },
  { word: "Mário", image: "" },
  { word: "Nelsinho", image: "" },
  { word: "Neide", image: "" },
  { word: "Cilecina", image: "" },
  { word: "Perpétua", image: "" },
];

const handleWordClick = (word: string, image: string | null) => {
  selectedImage.value = image;
  phrase.value.push(word);
  speakWord(word);
};

const handleErase = () => {
  selectedImage.value = null;
  phrase.value = [];
  window.speechSynthesis.cancel();
};

const handleSpeak = () => {
  speakWord(phrase.value.join(" "));
};

const speakWord = (text: string | undefined) => {
  if (!text) return;

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang === "pt-BR" && v.name.includes("Google")) || voices[0];

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = "pt-BR";
  window.speechSynthesis.speak(utterance);
};
</script>
