export function truncateParagraph(paragraphId, Limit) {
    const paragraph = paragraphId;
    const words = paragraph.split(' ');

    if (words.length > Limit) {
        const truncatedText = words.slice(0, Limit).join(' ') + '...';
        return truncatedText;
    }
}
// Call the function for each paragraph
// truncateParagraph('paragraph1', 10); // Truncate to 10 words
// truncateParagraph('paragraph2', 10); // Truncate to 10 words
