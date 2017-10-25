
export const Constants = {   

    api_url: "http://192.168.1.90:8000/api/v1/",

    //LOGIN Screen
    login: "account/login/",
    bondsearch: "search/",
    forgot: "forgot/",
    logout: "logout/",

    //SURETY Agency
    getSuretyDashboardAgencyDetails: "surety/dashboard/agency_details/",
    saveSuretyDashboardAgencyDetails: "saveSuretyDashboardAgencyDetails",  

    //SURETY Agent
    getSuretyDashboardAgentDetails: "surety/dashboard/agent_details/",
    saveSuretyDashboardAgentDetails: "saveSuretyDashboardAgentDetails",



    //DOI Agency
    getDoiDashboardAgencyDetails: "doi/dashboard/agency_details/",
    saveDoiDashboardAgencyDetails: "saveDoiDashboardAgencyDetails",  

    //DOI Agent
    getDoiDashboardAgentDetails: "doi/dashboard/agent_details/",
    saveDoiDashboardAgentDetails: "saveDoiDashboardAgentDetails",  
}

export const ExcludeAccessToken = ['login', 'register'];
