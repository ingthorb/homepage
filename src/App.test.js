import React from "react";
import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from "@testing-library/react";
import App from "./App";
import resumeData from "../public/resumeData.json";

beforeEach(() => {
    global.fetch = jest
        .fn()
        .mockResolvedValue({ ok: true, json: async () => resumeData });
});
afterEach(() => {
    delete global.fetch;
});

it("loads the profile and exposes all project destinations", async () => {
    render(<App />);
    expect(
        await screen.findByRole("heading", { name: "NOVA Iceland" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Reykjavík, Iceland")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Engineer at NOVA Iceland")).toBeInTheDocument();
    expect(document.querySelector(".portrait-mark")).toBeNull();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    for (const project of resumeData.portfolio.projects) {
        const link = screen.getByRole("link", {
            name: `Explore ${project.title}`,
        });
        expect(link).toHaveAttribute("href", project.url);
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        const card = within(link.closest("article"));
        expect(
            card.getByRole("heading", { name: project.title }),
        ).toBeInTheDocument();
        expect(card.getByText(project.category)).toBeInTheDocument();
    }
});

it("filters the projects and restores the complete list", async () => {
    render(<App />);
    const websites = await screen.findByRole("button", { name: "Websites" });
    fireEvent.click(websites);
    expect(websites).toHaveAttribute("aria-pressed", "true");
    expect(
        screen.getByRole("link", { name: "Explore Bilabud.is" }),
    ).toBeInTheDocument();
    expect(
        screen.getByRole("link", { name: "Explore Gluggasalan.is" }),
    ).toBeInTheDocument();
    expect(
        screen.queryByRole("link", { name: "Explore DeckMate" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("2 projects");
    fireEvent.click(screen.getByRole("button", { name: "Personal products" }));
    expect(screen.getByRole("status")).toHaveTextContent("3 projects");
    fireEvent.click(screen.getByRole("button", { name: "All projects" }));
    expect(screen.getAllByRole("article")).toHaveLength(
        resumeData.portfolio.projects.length,
    );
});

it("closes mobile navigation with Escape and restores toggle focus", async () => {
    render(<App />);
    const toggle = await screen.findByRole("button", {
        name: "Open navigation",
    });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(screen.getByRole("navigation"), { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    fireEvent.click(toggle);
    fireEvent.click(
        within(screen.getByRole("navigation")).getByRole("link", {
            name: "Projects",
        }),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
});

it("offers a working retry after a failed content request", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Offline"));
    render(<App />);
    expect(await screen.findByRole("alert")).toHaveTextContent("couldn’t load");
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    await waitFor(() =>
        expect(
            screen.getByRole("heading", { name: "DeckMate" }),
        ).toBeInTheDocument(),
    );
    expect(global.fetch).toHaveBeenCalledTimes(2);
});
