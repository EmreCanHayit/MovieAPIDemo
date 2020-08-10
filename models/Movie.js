const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [
            true,
            '`{PATH}` alanı zorunludur.'
        ],
        maxlength: [
            15,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MAXLENGTH}) karakterden küçük olmalıdır.'
        ],
        minlength: [
            4,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MINLENGTH}) karakterden büyük olmalıdır.'
        ]
    },
    category: {
        type: String,
        maxlength: [
            50,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MAXLENGTH}) karakterden küçük olmalıdır.'
        ],
        minlength: [
            5,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MINLENGTH}) karakterden büyük olmalıdır.'
        ]
    },
    country: {
        type: String,
        maxlength: [
            100,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MAXLENGTH}) karakterden küçük olmalıdır.'
        ],
        minlength: [
            3,
            '`{PATH}` alanına (`{VALUE}`) girdiğiniz metin ({MINLENGTH}) karakterden büyük olmalıdır.'
        ]
    },
    year: {
        type: Number,
        max: [
            2050,
            '`{PATH}` alanına ({MAX}) yılından büyük değer girilemez.'
        ],
        min: [
            1800,
            '`{PATH}` alanına ({MIN}) yılından küçük değer girilemez.'
        ]
    },
    imdb_score: {
        type: Number,
        max: [
            10,
            '`{PATH}` alanına girilebilecek en yüksek puan ({MAX})'
        ],
        min: [
            0,
            '`{PATH}` alanına girilebilecek en düşük puan ({MIN})'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);