FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY *.sln ./
COPY AudioStorageService/AudioStorageService.csproj AudioStorageService/
RUN dotnet restore
COPY . .
WORKDIR /src/AudioStorageService
RUN dotnet build -c Release -o /app


FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
VOLUME /app/Music
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AudioStorageService.dll"]
