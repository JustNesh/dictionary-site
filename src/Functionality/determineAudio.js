export default function determineAudio(phonetics) {
    for (let i=0; i < phonetics.length;i++) {
        if (phonetics[i].audio) {
            return phonetics[i].audio
        }
    }
}