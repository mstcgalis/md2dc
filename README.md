# [md2dc](https://md2dc.danielgalis.com) - Markdown to Discord

## Scenario
You're writing a report on a your new project in your preffered Markdown editor, using Markdown style (`[text](link)`) links all over the place. "My squad needs to see this!" you exclaim, "I'll just copy and paste it into Discord!" But the links show up as massive cascades of blue text, making the text borderline unreadable.

## Solution
[md2dc](https://md2dc.danielgalis.com) will convert all Markdown style links to a Discord-friendly link notation:

```[text](link) -> **text** (`link#N`)```
- `text` is the text of the link
- `N` is the number of the link in the document


A numbered list of all links will be added to the bottom of your text:
```
 `link#1`: https://example.com
 `link#2`: https://example.com
 `link#N`: https://example.com
```

## Usage
Go to [md2dc.danielgalis.com](https://md2dc.danielgalis.com) and follow the instructions.

## Roadmap
- [ ] Convert Discord links to Markdown links (reverse)
- [ ] Make it look pretty (add CSS)
- [ ] Mobile support
- [ ] File upload / download support
- [ ] Convert Markdown headings to a Discord-friendly alternative

## Contributing
Feel free to contribute if something about this tool pisses you off (or you care enough). The **Roadmap** contains some ideas, but do whatever. I'm not your boss. Just make sure to open a pull request.

---
with ❤️ and 🌱 by [Daniel Gális](https://danielgalis.com)
