window.PaintSDK = (() => {
  class PaintSDK {
    constructor (canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
    }

    setDimensions () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    setColor (color) {
      this.context.strokeStyle = color;
    }

    setThickness (thickness) {
      this.context.lineWidth = thickness;
      this.context.lineCap = 'round';
    }

    getPointerPosition (e) {
      return {
        x: e.clientX,
        y: e.clientY
      }
    }

    drawLine (x, y) {
      this.context.lineTo(x - this.canvas.offsetLeft, y - this.canvas.offsetTop);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(x - this.canvas.offsetLeft, y - this.canvas.offsetTop);
    }

    beginPath () {
      this.context.beginPath();
    }
  }

  return PaintSDK;
})();