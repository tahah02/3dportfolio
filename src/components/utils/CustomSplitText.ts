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
      const text = el.innerText || el.textContent || '';
      el.innerHTML = '';

      const wordsArr = text.split(/(\s+)/);
      wordsArr.forEach((word) => {
        if (/^\s+$/.test(word)) {
          el.appendChild(document.createTextNode(word));
          return;
        }

        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.className = 'split-word';

        if (doChars) {
          Array.from(word).forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.style.display = 'inline-block';
            charSpan.className = 'split-char';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }

        el.appendChild(wordSpan);
        if (doWords) {
          this.words.push(wordSpan);
        }
      });
    });
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
