document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    
    // Автовоспроизведение при загрузке страницы
    audioPlayer.volume = 0.5;
    
    // Попытка автовоспроизведения
    const playAudio = () => {
        audioPlayer.play().catch(error => {
            console.log('Автовоспроизведение заблокировано. Нажмите кнопку play.');
        });
    };
    
    // Задержка для лучшей совместимости
    setTimeout(playAudio, 500);
    
    // Управление воспроизведением
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶️';
        }
    });
    
    // Обновление кнопки при окончании трека (на случай если loop отключен)
    audioPlayer.addEventListener('play', function() {
        playPauseBtn.textContent = '⏸️';
    });
    
    audioPlayer.addEventListener('pause', function() {
        playPauseBtn.textContent = '▶️';
    });
    
    // Управление громкостью
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });
});
