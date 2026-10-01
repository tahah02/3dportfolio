export class ScrollSmoother {
  private isPaused: boolean = false;

  static create(_options: any) {
    return new ScrollSmoother();
  }

  static refresh(_force?: boolean) {
    // Refresh scroll triggers if needed
  }

  scrollTop(val?: number) {
    if (val !== undefined) {
      window.scrollTo({ top: val, behavior: 'instant' });
    }
    return window.scrollY;
  }

  paused(val?: boolean) {
    if (val !== undefined) {
      this.isPaused = val;
    }
    return this.isPaused;
  }

  scrollTo(target: string | HTMLElement | null, smooth: boolean = true, _position?: string) {
    if (!target) return;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    }
  }
}
