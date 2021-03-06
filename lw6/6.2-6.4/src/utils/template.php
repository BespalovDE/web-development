<?php

function renderTemplate(string $tplName, array $args = []): void
{
    require_once(TEMPLATES_PATH . $tplName);
}

function printChecked(string $name, string $valueRadio, ?array $args): string
{
    if (!isset($args[$name]) && $valueRadio === "Мужской") return "checked";
    return isset($args[$name]) ? $args[$name] === $valueRadio ? "checked" : "" : "";
}

function printSelected(string $name, string $valueOption, ?array $args): string
{
    return isset($args[$name]) ? $args[$name] === $valueOption ? "selected" : "" : "";
}