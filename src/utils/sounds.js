// src/utils/sounds.js
// Web Audio API Synthesizer - Zero dependencies, instant playback, mobile compatible

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.spinTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft wooden / mechanical click when wheel passes a peg
  playWheelClick(volume = 0.25) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(480 + Math.random() * 80, t);
    osc.frequency.exponentialRampToValueAtTime(120, t + 0.03);

    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.035);
  }

  // Realistic deceleration clicks during wheel spin
  playSpinSequence(duration = 4500) {
    this.init();
    if (this.spinTimer) clearInterval(this.spinTimer);

    const startTime = Date.now();
    let currentInterval = 45; // Start fast

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= duration) return;

      this.playWheelClick(0.3);

      // Decelerate curve matching cubic-bezier(0.15, 0.9, 0.2, 1)
      const progress = elapsed / duration;
      currentInterval = 45 + Math.pow(progress, 2.2) * 380;

      if (elapsed + currentInterval < duration) {
        this.spinTimer = setTimeout(tick, currentInterval);
      }
    };

    tick();
  }

  // Winner fanfare / chime when wheel stops
  playWinChime() {
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const t = this.ctx.currentTime + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.55);
    });
  }

  // Timer Tick (Subtle for normal seconds, sharper for final 5 seconds)
  playTimerTick(isUrgent = false) {
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (isUrgent) {
      // Alert beep for countdown 5, 4, 3, 2, 1
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t); // A5 alert
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.14);
    } else {
      // Gentle soft tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t);
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.045);
    }
  }

  // Celebration chime when speech / timer completes
  playFinishChime() {
    this.init();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    notes.forEach((freq, idx) => {
      const t = this.ctx.currentTime + idx * 0.1;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.65);
    });
  }
}

export const sounds = new SoundEffects();
