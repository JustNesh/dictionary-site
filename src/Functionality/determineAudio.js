export default function determineAudio(phonetics,word) {
    for (let i=0; i < phonetics.length;i++) {
        let audioUrl = phonetics[i].audio
        if (audioUrl) {
            return audioUrl
        }
    }
}