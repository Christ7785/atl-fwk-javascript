const { qcms, addQcm } = require("../models/inmemory");

const displayQcms = (req, res) => {
    res.render("qcms", { qcms: qcms });
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.render("qcm", { qcm });
};

const displayQcmJson = (req, res) => {
    res.json({ qcms });
};

const displayFormQcm = (req, res) => {
    res.render("newqcm");
};

function transformFormDataToJson(formData) {
    const result = {
        id: 0,
        name: formData.name,
        nbpoints: formData.nbpoints,
        subject: formData.subject,
        questions: [],
    };

    if (formData.questions && Array.isArray(formData.questions)) {
        formData.questions.forEach((question, questionIndex) => {
            if (question !== undefined && formData.answers[questionIndex] !== undefined) {
                const splitAnswers = formData.answers[questionIndex].split("|")[0].split(";");
                const splitCorrect = formData.answers[questionIndex].split("|")[1]?.split(";") || [];

                const questionObj = {
                    name: question,
                    answers: splitAnswers.map((answer, answerIndex) => {
                        return {
                            name: answer,
                            correct: splitCorrect[answerIndex] === "true",
                        };
                    }),
                };
                result.questions.push(questionObj);
            }
        });
    }

    return result;
}


const createNewForm = (req, res) => {
    console.log(req.body);
    const formData = req.body;

    const jsonData = transformFormDataToJson(formData);
    addQcm(jsonData);
    res.redirect("/qcms");
};

module.exports = {
    displayQcms,
    displayFormQcm,
    createNewForm,
    displayQcmJson,
    displayQcmDetailed,
};