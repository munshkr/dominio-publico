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
    explanation: "Las obras originales de autor entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalNaturalPersonNotPD",
    _type: "npd",
    explanation: "Las obras originales de autor entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras originales que son propiedad de una persona jurídica o institución entran en dominio público <b>50 años contados a partir del 1º de enero del año siguiente a la fecha de publicación</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalInstitutionNotPD",
    _type: "npd",
    explanation: "Las obras originales que son propiedad de una persona jurídica o institución entran en dominio público <b>50 años contados a partir del 1º de enero del año siguiente a la fecha de publicación</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Una vez que el autor registra titularidad sobre el pseudónimo, la obra original entra en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorRegisteredNotPD",
    _type: "npd",
    explanation: "Una vez que el autor registra titularidad sobre el pseudónimo, la obra original entra en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Si el autor no registra titularidad sobre el pseudónimo, <b>los derechos pertenecen al editor</b> y la obra original entra en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del editor</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalPseudonimAuthorNotRegisteredNotPD",
    _type: "npd",
    explanation: "Si el autor no registra titularidad sobre el pseudónimo, <b>los derechos pertenecen al editor</b> y la obra original entra en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del editor</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras originales anónimas pertenecientes a instituciones, corporaciones o personas jurídicas entran en dominio público <b>50 años contados a partir de la fecha de publicación</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionRegisteredNotPD",
    _type: "npd",
    explanation: "Las obras originales anónimas pertenecientes a instituciones, corporaciones o personas jurídicas entran en dominio público <b>50 años contados a partir de la fecha de publicación</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras originales anónimas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del editor</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkOriginalAnonymousInstitutionNotRegisteredNotPD",
    _type: "npd",
    explanation: "Las obras originales anónimas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del editor</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras derivadas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del traductor / adaptador</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkDerivativeNotPD",
    _type: "npd",
    explanation: "Las obras derivadas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del traductor / adaptador</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras colectivas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "commonWorkColectiveNotPD",
    _type: "npd",
    explanation: "Las obras colectivas entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la muerte del autor</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "musicalWorkFolklore",
    _type: "pd",
    explanation: "Las obras folklóricas en su forma original no se encuentran cubiertas por la ley de propiedad intelectual y por tanto pertenecen al dominio público. Sus obras derivadas e interpretaciones se regulan como cualquier otra obra derivada o interpretación del dominio público.",
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
    explanation: "Los fonogramas e interpretaciones musicales entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la fecha de publicación</b>. Los titulares de estos derechos son los intérpretes y productores de fonogramas.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "musicalWorkNotFolkloreNotPD",
    _type: "npd",
    explanation: "Los fonogramas e interpretaciones musicales entran en dominio público <b>70 años contados a partir del 1º de enero del año siguiente a la fecha de publicación</b>. Los titulares de estos derechos son los intérpretes y productores de fonogramas.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras de radiodifusión entran en dominio público <b>50 años contados a partir del 1º de enero del año siguiente a la fecha de emisión</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "radioWorkNotPD",
    _type: "npd",
    explanation: "Las obras de radiodifusión entran en dominio público <b>50 años contados a partir del 1º de enero del año siguiente a la fecha de emisión</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Las obras fotográficas entran en dominio público <b>25 años contados a partir de la fecha de publicación</b>.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "photoWorkNotPD",
    _type: "npd",
    explanation: "Las obras fotográficas entran en dominio público <b>25 años contados a partir de la fecha de publicación</b>.",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
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
    explanation: "Para las obras cinematográficas, el derecho de propiedad es de <b>50 años a partir del fallecimiento del último colaborador</b>, considerando tal al autor del argumento, el productor y al director de la película.",
    when: "La obra entró en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "cinemaWorkNotPD",
    _type: "npd",
    explanation: "Para las obras cinematográficas, el derecho de propiedad es de <b>50 años a partir del fallecimiento del último colaborador</b>, considerando tal al autor del argumento, el productor y al director de la película.</p><p>",
    when: "La obra entrará en dominio público el <b>1º de enero de <%= dp_year %></b>.",
  },

  {
    _name: "newsWork",
    _type: "pd",
    explanation: "Las noticias de interés general son de dominio público y pueden ser reproducidas libremente siempre que, cuando la reproducción sea literal, <b>se cite la fuente</b>.",
  },

];
