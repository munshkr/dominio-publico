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
  },

  {
    _name: "commonWorkOriginalNaturalPerson",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del autor",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkOriginalNaturalPersonPD", "commonWorkOriginalNaturalPersonNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalNaturalPersonPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalNaturalPersonNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalInstitution",
    _type: "year_input",
    title: "Ingrese la fecha de publicación de la obra",
    func: {
      name: "greaterThan",
      args: [50, "commonWorkOriginalInstitutionPD", "commonWorkOriginalInstitutionNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalInstitutionPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalInstitutionNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorRegistered",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del autor",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkOriginalPseudonimAuthorRegisteredPD", "commonWorkOriginalPseudonimAuthorRegisteredNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorRegisteredPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorRegisteredNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorNotRegistered",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del editor",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkOriginalPseudonimAuthorNotRegisteredPD", "commonWorkOriginalPseudonimAuthorNotRegisteredNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorNotRegisteredPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorNotRegisteredNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionRegistered",
    _type: "year_input",
    title: "Ingrese la fecha de publicación de la obra",
    func: {
      name: "greaterThan",
      args: [50, "commonWorkOriginalAnonymousInstitutionRegisteredPD", "commonWorkOriginalAnonymousInstitutionRegisteredNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionRegisteredPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionRegisteredNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionNotRegistered",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del editor",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkOriginalAnonymousInstitutionNotRegisteredPD", "commonWorkOriginalAnonymousInstitutionNotRegisteredNotPD"]
    }
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionNotRegisteredPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionNotRegisteredNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkDerivative",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del traductor / adaptador",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkDerivativePD", "commonWorkDerivativeNotPD"]
    }
  },

  {
    _name: "commonWorkDerivativePD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkDerivativeNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "commonWorkColective",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del último colaborador no anónimo",
    func: {
      name: "greaterThan",
      args: [70, "commonWorkColectivePD", "commonWorkColectiveNotPD"]
    }
  },

  {
    _name: "commonWorkColectivePD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "commonWorkColectiveNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "musicalWorkFolklore",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "musicalWorkNotFolklore",
    _type: "year_input",
    title: "Ingrese la fecha de publicación de la obra",
    func: {
      name: "greaterThan",
      args: [70, "musicalWorkNotFolklorePD", "musicalWorkNotFolkloreNotPD"]
    }
  },

  {
    _name: "musicalWorkNotFolklorePD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "musicalWorkNotFolkloreNotPD",
    _type: "npd",
    explanation: "...",
  },


  {
    _name: "radioWork",
    _type: "year_input",
    title: "Ingrese la fecha de emisión",
    func: {
      name: "greaterThan",
      args: [50, "radioWorkPD", "radioWorkNotPD"]
    }
  },

  {
    _name: "radioWorkPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "radioWorkNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "photoWork",
    _type: "year_input",
    title: "Ingrese la fecha de publicación de la obra",
    func: {
      name: "greaterThan",
      args: [25, "photoWorkPD", "photoWorkNotPD"]
    }
  },

  {
    _name: "photoWorkPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "photoWorkNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "cinemaWork",
    _type: "year_input",
    title: "Ingrese la fecha de fallecimiento del último colaborador",
    func: {
      name: "greaterThan",
      args: [50, "cinemaWorkPD", "cinemaWorkNotPD"]
    }
  },

  {
    _name: "cinemaWorkPD",
    _type: "pd",
    explanation: "...",
  },

  {
    _name: "cinemaWorkNotPD",
    _type: "npd",
    explanation: "...",
  },

  {
    _name: "newsWork",
    _type: "pd",
    explanation: "...",
  },

];
