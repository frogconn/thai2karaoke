module.exports = val => {
    var result = [
        { th: 'ก', first: 'k', spell: 'k' },
        { th: 'ข', first: 'kh', spell: 'k' },
        { th: 'ฃ', first: 'kh', spell: 'k' },
        { th: 'ค', first: 'kh', spell: 'k' },
        { th: 'ฅ', first: 'kh', spell: 'k' },
        { th: 'ฆ', first: 'kh', spell: 'k' },
        { th: 'ง', first: 'ng', spell: 'ng' },
        { th: 'จ', first: 'ch', spell: 't' },
        { th: 'ฉ', first: 'ch', spell: 't' },
        { th: 'ช', first: 'ch', spell: 't' },
        { th: 'ซ', first: 's', spell: 't' },
        { th: 'ฌ', first: 'ch', spell: 't' },
        { th: 'ญ', first: 'y', spell: 'n' },
        { th: 'ฎ', first: 'd', spell: 't' },
        { th: 'ฏ', first: 't', spell: 't' },
        { th: 'ฐ', first: 'th', spell: 't' },
        { th: 'ฑ', first: 'th', spell: 't' },
        { th: 'ฒ', first: 'th', spell: 't' },
        { th: 'ณ', first: 'n', spell: 'n' },
        { th: 'ด', first: 'd', spell: 't' },
        { th: 'ต', first: 't', spell: 't' },
        { th: 'ถ', first: 'th', spell: 't' },
        { th: 'ท', first: 'th', spell: 't' },
        { th: 'ธ', first: 'th', spell: 't' },
        { th: 'น', first: 'n', spell: 'n' },
        { th: 'บ', first: 'b', spell: 'p' },
        { th: 'ป', first: 'p', spell: 'p' },
        { th: 'ผ', first: 'ph', spell: 'p' },
        { th: 'ฝ', first: 'f', spell: 'p' },
        { th: 'พ', first: 'ph', spell: 'p' },
        { th: 'ฟ', first: 'f', spell: 'p' },
        { th: 'ภ', first: 'ph', spell: 'p' },
        { th: 'ม', first: 'm', spell: 'm' },
        { th: 'ย', first: 'y', spell: 'i' },
        { th: 'ร', first: 'r', spell: 'r' },
        { th: 'ฤ', first: 'rue', spell: '' },
        { th: 'ล', first: 'l', spell: 'l' },
        { th: 'ฦ', first: 'lue', spell: '' },
        { th: 'ว', first: 'w', spell: 'w' },
        { th: 'ศ', first: 's', spell: 't' },
        { th: 'ษ', first: 's', spell: 't' },
        { th: 'ส', first: 's', spell: 't' },
        { th: 'ห', first: 'h', spell: 'h' },
        { th: 'ฬ', first: 'l', spell: 'n' },
        { th: 'อ', first: 'a', spell: 'o' },
        { th: 'ฮ', first: 'h', spell: 'h' }].find(t => t.th === val)
    if (result) {
        return result
    } else {
        return ''
    }
}