/**
 * Custom SplitText replacement for the paid GSAP SplitText plugin.
 * Splits text into characters, words, and/or lines by wrapping them in spans.
 */

interface SplitOptions {
  type: string;        // e.g. "chars,lines", "chars,words", "lines,words"
  linesClass?: string; // class name for line wrappers
}

export class CustomSplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: HTMLElement[];
  private originals: { el: HTMLElement; html: string }[] = [];

  constructor(target: string | HTMLElement | (string | HTMLElement)[], options: SplitOptions) {
    // Resolve target elements
    if (Array.isArray(target)) {
      this.elements = target.flatMap((t) => {
        if (typeof t === "string") return Array.from(document.querySelectorAll<HTMLElement>(t));
        return [t];
      });
    } else if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll<HTMLElement>(target));
    } else {
      this.elements = [target];
    }

    const types = options.type.split(",").map((t) => t.trim());
    const doChars = types.includes("chars");
    const doWords = types.includes("words");
    const doLines = types.includes("lines");

    this.elements.forEach((el) => {
      this.originals.push({ el, html: el.innerHTML });
      const text = el.textContent || "";
      el.innerHTML = "";

      // Split into words
      const wordTexts = text.split(/\s+/).filter(Boolean);
      const wordSpans: HTMLElement[] = [];

      wordTexts.forEach((word, wi) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.position = "relative";

        if (doChars) {
          word.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }

        wordSpans.push(wordSpan);
        if (doWords) this.words.push(wordSpan);

        el.appendChild(wordSpan);
        // Add space between words
        if (wi < wordTexts.length - 1) {
          const space = document.createTextNode(" ");
          el.appendChild(space);
        }
      });

      // Handle lines wrapping
      if (doLines && options.linesClass) {
        // Group spans by their offsetTop to detect line breaks
        const lineGroups: HTMLElement[][] = [];
        let currentLine: HTMLElement[] = [];
        let currentTop: number | null = null;

        wordSpans.forEach((span) => {
          const top = span.getBoundingClientRect().top;
          if (currentTop === null || Math.abs(top - currentTop) < 5) {
            currentLine.push(span);
            if (currentTop === null) currentTop = top;
          } else {
            lineGroups.push(currentLine);
            currentLine = [span];
            currentTop = top;
          }
        });
        if (currentLine.length) lineGroups.push(currentLine);

        el.innerHTML = "";
        lineGroups.forEach((group) => {
          const lineDiv = document.createElement("div");
          lineDiv.className = options.linesClass || "";
          group.forEach((span, i) => {
            lineDiv.appendChild(span);
            if (i < group.length - 1) {
              lineDiv.appendChild(document.createTextNode(" "));
            }
          });
          el.appendChild(lineDiv);
          this.lines.push(lineDiv);
        });
      }
    });
  }

  revert() {
    this.originals.forEach(({ el, html }) => {
      el.innerHTML = html;
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
