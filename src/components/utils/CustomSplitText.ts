export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: HTMLElement[] = [];
  private originalHtml: Map<HTMLElement, string> = new Map();

  constructor(
    target: string | HTMLElement | (string | HTMLElement)[] | NodeListOf<HTMLElement>,
    options: { type?: string; linesClass?: string } = {}
  ) {
    if (typeof target === 'string') {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else if (target instanceof NodeList || Array.isArray(target)) {
      const arr: HTMLElement[] = [];
      Array.from(target).forEach((item) => {
        if (typeof item === 'string') {
          arr.push(...Array.from(document.querySelectorAll<HTMLElement>(item)));
        } else if (item instanceof HTMLElement) {
          arr.push(item);
        }
      });
      this.elements = arr;
    }

    this.split(options);
  }

  private split(options: { type?: string; linesClass?: string }) {
    const types = (options.type || 'chars,words,lines').split(',');
    const doChars = types.some((t) => t.includes('char'));
    const doWords = types.some((t) => t.includes('word'));

    this.elements.forEach((el) => {
      this.originalHtml.set(el, el.innerHTML);
      this.splitNode(el, { doChars, doWords });
    });
  }

  private splitNode(node: Node, options: { doChars: boolean; doWords: boolean }) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text.trim()) {
        return;
      }
      const frag = document.createDocumentFragment();
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }

        if (options.doChars) {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'split-word';
          wordSpan.style.display = 'inline-block';
          Array.from(part).forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'split-char';
            charSpan.style.display = 'inline-block';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
          frag.appendChild(wordSpan);
          if (options.doWords) this.words.push(wordSpan);
        } else if (options.doWords) {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'split-word';
          wordSpan.style.display = 'inline-block';
          wordSpan.textContent = part;
          frag.appendChild(wordSpan);
          this.words.push(wordSpan);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      Array.from(el.childNodes).forEach((child) => this.splitNode(child, options));
    }
  }

  revert() {
    this.elements.forEach((el) => {
      const orig = this.originalHtml.get(el);
      if (orig !== undefined) {
        el.innerHTML = orig;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
