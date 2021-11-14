import superagent from "superagent"

export const openLinkInNewTab = (url:string, window: Window) => {
    window.open(url, "_blank");
}

import {
    CardData,
    paginatedProjects,
    projectFilters,
    singleProject,
    githubResponse
} from "../interfaces";

export const fetchGithubCommits = async (): Promise<githubResponse | null> => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/github")
        .then((res)=> res.body.commits)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchProjectStats = async (): Promise<number | null> => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/project/stat")
        .then((res) => res.body.projectTotal)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchProjects = async (): Promise<CardData | null> => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/project/items")
        .then((res) => res.body)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchPaginatedProjects = async (
    page: number
): Promise<paginatedProjects.RootObject | null> => {
    return await superagent
        .get(
            `https://ceefend.herokuapp.com/api/project/items`,
        )
        .send({
            params: {
                page
            }
        })
        .then((res) => res.body)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchFilteredPaginatedProjects = async (
    page: number,
    tech: string
): Promise<paginatedProjects.RootObject | null> => {
    return await superagent
        .get(
            `https://ceefend.herokuapp.com/api/project/filter/`
        )
        .send({ params: { tech, page } })
        .then((res) => res.body)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchLastCommitForRepo = async (repo: string) => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/github" + repo)
        .then((res) => res.body.commit)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchFilters = async (): Promise<projectFilters.RootObject | null> => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/project/filter")
        .then((res) => res.body)
        .catch((err) => {
            console.error(err);
            return null;
        });
};

export const fetchProjectByPriority = async (
    status: number
): Promise<singleProject.RootObject | null> => {
    return await superagent
        .get("https://ceefend.herokuapp.com/api/project/")
        .send({
            params: {
                status
            }
        })
        .then((res) => res.body)
        .catch((err) => {
            console.error(err);
            return null;
        });
};