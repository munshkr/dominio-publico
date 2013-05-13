var questions = {};
questions.AR = [

  {
    _name: "first",
    _type: "choice",
    title: "¿A qué categoría pertenece?",
    choices: [
      {
        name: "commonWork",
        title: "Obra científica, literaria, artística de toda naturaleza o extensión, software",
        state: "commonWork"
      },
      {
        name:  "musicalWork",
        title: "Fonograma o interpretación musical",
        state: "musicalWork"
      },
      {
        name:  "radioWork",
        title: "Emisión de organismo de radiodifusión",
        state: "radioWork"
      },
      {
        name:  "photoWork",
        title: "Fotografía",
        state: "photoWork"
      },
      {
        name:  "cinemaWork",
        title: "Obra cinematográfica",
        state: "cinemaWork"
      },
      {
        name:  "newsWork",
        title: "Noticias",
        state: "newsWork"
      }
    ]
  },

  {
    _name: "commonWork",
    _type: "choice",
    title: "¿Es una obra...",
    choices: [
      {
        name:  "original",
        title: "original?",
        state: "commonWorkOriginal"
      },
      {
        name:  "derivative",
        title: "derivada?",
        state: "commonWorkDerivative"
      },
      {
        name: "colective",
        title: "colectiva?",
        state: "commonWorkColective"
      }
    ]
  },

  {
    _name: "commonWorkOriginal",
    _type: "choice",
    title: "¿Qué tipo de autor?",
    choices: [
      {
        name: "naturalPerson",
        title: "Persona física",
        state: "commonWorkOriginalNaturalPerson"
      },
      {
        name: "institution",
        title: "Persona jurídica o institución",
        state: "commonWorkOriginalInstitution"
      },
      {
        name: "pseudonim",
        title: "Seudónimo",
        state: "commonWorkOriginalPseudonim"
      },
      {
        name: "anonymous",
        title: "Anónimo",
        state: "commonWorkOriginalAnonymous"
      },
    ]
  },

  {
    _name: "commonWorkOriginalPseudonim",
    _type: "choice",
    title: "¿El autor registró titularidad sobre su seudónimo?",
    choices: [
      {
        name: "yes",
        title: "Sí",
        state: "commonWorkOriginalPseudonimAuthorRegistered"
      },
      {
        name: "no",
        title: "No",
        state: "commonWorkOriginalPseudonimAuthorNotRegistered"
      }
    ]
  },

  {
    _name: "commonWorkOriginalAnonymous",
    _type: "choice",
    title: "¿Está bajo titularidad de una persona jurídica o institución?",
    choices: [
      {
        name: "yes",
        title: "Sí",
        state: "commonWorkOriginalAnonymousInstitutionRegistered"
      },
      {
        name: "no",
        title: "No",
        state: "commonWorkOriginalAnonymousInstitutionNotRegistered"
      }
    ]
  },

  {
    _name: "musicalWork",
    _type: "choice",
    title: "¿Es una obra folklórica?",
    choices: [
      {
        name: "yes",
        title: "Sí",
        state: "musicalWorkFolklore"
      },
      {
        name: "no",
        title: "No",
        state: "musicalWorkNotFolklore"
      }
    ]
  }
];
