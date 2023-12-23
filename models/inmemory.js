// importer la classe Qcm
const Qcm = require("./qcm");

// remplacer les simples chaînes de caractères par des instances de la classe Qcm
const qcms = [
    new Qcm({
        id: 0,
        name: "Introduction Vanilla JS",
        nbpoints: 20,
        subject: "Javascript",
        questions: [
            {
                name: "Qu'est-ce que l'instruction 'for' utilisée pour faire en Javascript ?",
                answers: [
                    {
                        name: "Itération",
                        correct: true,
                    },
                    {
                        name: "Condition",
                        correct: false,
                    },
                    {
                        name: "Déclaration de fonction",
                        correct: false,
                    },
                    {
                        name: "Importation de modules",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 1,
        name: "Framework Frontend",
        nbpoints: 20,
        subject: "Angular",
        questions: [
            {
                name: "Qu'est-ce qu'un service dans le contexte d'Angular ?",
                answers: [
                    {
                        name: "Un singleton partagé entre les composants",
                        correct: true,
                    },
                    {
                        name: "Une directive structurelle",
                        correct: false,
                    },
                    {
                        name: "Une classe de modèle",
                        correct: false,
                    },
                    {
                        name: "Un conteneur Docker spécialisé",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 2,
        name: "Framework Backend",
        nbpoints: 10,
        subject: "Express",
        questions: [
            {
                name: "Qu'est-ce que Express apporte à Node.js dans le développement backend ?",
                answers: [
                    {
                        name: "Middleware pour le traitement des requêtes",
                        correct: true,
                    },
                    {
                        name: "Gestionnaire de bases de données intégré",
                        correct: false,
                    },
                    {
                        name: "Système de template pour le rendu côté serveur",
                        correct: false,
                    },
                    {
                        name: "Compilateur TypeScript intégré",
                        correct: false,
                    },
                ],
            },
        ],
    }),
];

const addQcm = (rawObject) => {
    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });

    const qcm = new Qcm({
        id: maxId + 1,
        name: rawObject.name,
        subject: rawObject.subject,
        nbpoints: Number(rawObject.nbpoints),
        questions: rawObject.questions || [],
    });

    qcms.push(qcm);
};

module.exports = { qcms, addQcm };
