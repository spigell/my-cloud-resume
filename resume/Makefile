RESUME_PDF_LIST := devops-sre-pdf-ru
RESUME_HH_LIST := devops-sre-hh-ru

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

.build-hh-data:
	for a in $(RESUME_HH_LIST); do \
        	yarn -s ts-node resume/$${a}.ts > $${a}.json ;\
	done


build: clean .build-pdf
