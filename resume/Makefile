RESUME_PDF_LIST := devops-sre-pdf-ru devops-sre-pdf-en \
	sre-support-engineer-en \
	sre-support-engineer-ru
THEME_REPO := https://github.com/ObserverOfTime/jsonresume-theme-relaxed
THEME_REF := 9bf686c4239a05c85fe3ac18615918462c5729f4
THEME_DIR := jsonresume-theme-relaxed
THEME_ICON_PATCH := patches/jsonresume-theme-relaxed-local-icons.patch
THEME_FONT_PATCH := patches/jsonresume-theme-relaxed-font.patch

clean:
	rm -rfv frontend/resume.html
	rm -rfv jsonresume-theme-relaxed

.build-pdf:
	if [ ! -d "$(THEME_DIR)" ]; then \
		git clone "$(THEME_REPO)" "$(THEME_DIR)"; \
	fi
	cd $(THEME_DIR) && git fetch origin && git checkout $(THEME_REF) &&\
	patch -p1 --forward < ../$(THEME_ICON_PATCH) &&\
	patch -p1 --forward < ../$(THEME_FONT_PATCH) &&\
	npm install && npm add ts-node@v9.1 &&\
	cp ../src/pdf/i18n-ru.json ./i18n/ru.json -v &&\
    for a in $(RESUME_PDF_LIST); do \
        npx ts-node ../src/pdf/$${a}.ts > resume.json &&\
		npm run build -- ../artifacts/sergei-chukh-resume-$${a}.pdf; \
    done

dev-build-website-resume:
	yarn ts-node ./resume/build-website-resume.ts
	cp artifacts/resume.html ../frontend/resume.html

build-pdf: clean .build-pdf
