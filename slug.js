module.exports = text => {
    if(text == +text) {
        return text = `Пост номер ${text}`
    } else {
    text = text.replace(/[0-9#]/g, '').replace(/[^A-Z0-9]/gi, '').replace(/[-_]/g, ' ');
    console.log('slug text:', text);
    const rus = ["щ", "ш", "ч", "ц", "ю", "я", "ё", "ж", "ъ", "ы", "э", "а", "б", "в", "г", "д", "е", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ь"];
    const eng = ["shh", "sh", "ch", "cz", "yu", "ya", "yo", "zh", "``", "y'", "e`", "a", "b", "v", "g", "d", "e", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "x", "`"];
      for(let x = 0; x < rus.length; x++) {
          text = text.split(eng[x]).join(rus[x]);
          text = text.split(eng[x].toUpperCase()).join(rus[x].toUpperCase());
      }
      return text = `Пост ${text}`
    }
};