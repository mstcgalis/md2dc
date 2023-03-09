# Markdown to Discord

## Scenario
You're writing a report on a your new project in your preffered Markdown editor, using Markdown style (`[text](link)`) links all over the place. "My Discord squad needs to see this!" you exclaim excitedly. "I'll just copy and paste it into Discord!" you say, and you do. But the links show up as massive blocks of blue text, making the text almost unreadable.

## Solution
This tool will convert all Markdown style links to a Discord-friendly link notation:

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
- [ ] Convert Discord links to Markdown links
- [ ] Make it look pretty (add CSS)
- [ ] Mobile support
- [ ] File upload / download support
- [ ] Convert Markdown headings to a Discord-friendly alternative

## Contributing
Feel free to contribute in any way you want. The **Roadmap** contains some ideas, but do whatever. I'm not your boss. Just make sure to open a pull request.