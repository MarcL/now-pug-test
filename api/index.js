import path from 'path';
import pug from 'pug';

const templateDirectory = path.join(__dirname, '../templates');
const compiledEmbedTemplate = pug.compileFile(`${templateDirectory}/embed.pug`);

module.exports = (request, response) => {
    const html = compiledEmbedTemplate({
        title: 'Zeit',
    });

    response.send(html);
};