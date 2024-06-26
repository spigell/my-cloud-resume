RESUME_PDF_LIST := devops-sre-pdf-ru

clean:
	rm -rfv jsonresume-theme-relaxed

.build-pdf:
	git clone https://github.com/ObserverOfTime/jsonresume-theme-relaxed
	cd jsonresume-theme-relaxed &&\
	npm install &&\
	cp ../i18n-ru.json ./i18n/ru.json -v &&\
	sed 's/Lato/Roboto/g' -i ./src/resume.css &&\
    for a in $(RESUME_PDF_LIST); do \
        npx ts-node ../$${a}.ts > resume.json &&\
		npm run build -- ../resume-$${a}.pdf; \
    done

build: clean .build-pdf
