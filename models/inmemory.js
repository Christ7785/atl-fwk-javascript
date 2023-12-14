
const Qcm = require('./qcm');


const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript' }),
    new Qcm({ id: 1, name: 'Framework Frontend', nbpoints: 20, subject: 'Angular' }),
    new Qcm({ id: 2, name: 'Framework Backend', nbpoints: 10, subject: 'Express' }),
];
const addQuestionToQcm = (qcmId, question) => {
    const qcm = qcms.find((element) => element.id === qcmId);

    if (qcm) {

        if (!qcm.questions) {
            qcm.questions = [];
        }


        qcm.questions.push(question);
    }
};

const addQcm = (rawObject) => {

    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.Id) {
            maxId = qcm.id;
        }
    });

    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            subject: rawObject.subject,
            nbpoints: Number(rawObject.nbpoints)
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
}

module.exports = { qcms, addQcm };