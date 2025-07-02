RESUME_PDF_LIST := devops-sre-pdf-ru
RESUME_HH_LIST := devops-sre-hh-ru

clean:
	rm -rfv frontend/resume.html
	rm -rfv jsonresume-theme-relaxed

.build-pdf:
	git clone https://github.com/ObserverOfTime/jsonresume-theme-relaxed
	cd jsonresume-theme-relaxed && git checkout 9bf686c4239a05c85fe3ac18615918462c5729f4 &&\
	npm install && npm add ts-node@v9.1 &&\
	cp ../i18n-ru.json ./i18n/ru.json -v &&\
	sed 's/Lato/Roboto/g' -i ./src/resume.css &&\
    for a in $(RESUME_PDF_LIST); do \
        npx ts-node ../$${a}.ts > resume.json &&\
		npm run build -- ../artifacts/sergei-chukh-resume-$${a}.pdf; \
    done

dev-build-website-resume:
	yarn ts-node ./resume/build-website-resume.ts
	cp artifacts/resume.html ../frontend/resume.html

build-pdf: clean .build-pdf
